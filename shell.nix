{ pkgs ? import <nixpkgs> {}
}:
pkgs.mkShell {
    name="dev";
    buildInputs = [
        pkgs.nodejs-16_x
    ];
    shellHook = ''
        echo "Installing dependencies using npm, please wait."
        npm i
        echo "Done! You may now run npm run dev to test your changes."
    '';
}