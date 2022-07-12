{ pkgs ? import <nixpkgs> {}
}:
pkgs.mkShell {
    name="dev";
    buildInputs = [
        pkgs.nodejs-16_x
    ];
    shellHook = ''
        echo "Installing dependencies using pnpm, please wait."
        npm i
        echo "Done"
    '';
}