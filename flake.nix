{
  description = "Next.js personal site for Kenny Sheridan";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { nixpkgs, ... }:
    let
      systems = [ "x86_64-linux" "aarch64-darwin" "aarch64-linux" ];
      forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in
    {
      checks = forAllSystems (pkgs: {
        next-build = pkgs.buildNpmPackage {
          pname = "kenneth-personal-site";
          version = "0.1.0";
          src = ./.;

          nodejs = pkgs.nodejs_22;
          npmDepsHash = "sha256-TuYlOyuL3kWiI7PUnh0OdmEyCp3IeK1VEIJm99XRVCc=";

          dontNpmPrune = true;

          buildPhase = ''
            npm run lint
            npm run build
          '';

          installPhase = ''
            mkdir -p "$out"
            cp -R .next package.json package-lock.json public "$out"/
          '';

          NEXT_TELEMETRY_DISABLED = "1";
        };
      });

      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShell {
          packages = with pkgs; [
            git
            nodejs_22
            jq
            just
            prettier
          ];

          NEXT_TELEMETRY_DISABLED = "1";
          npm_config_update_notifier = "false";

          shellHook = ''
            echo "kenneth-personal-site dev shell"
            echo "node: $(node --version)  npm: $(npm --version)"
            echo "commands: npm run dev | npm run lint | npm run build | nix flake check"
          '';
        };
      });
    };
}
