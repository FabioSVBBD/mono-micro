echo "installing all apps"

yarn install:ng &
yarn install:preact &
yarn install:react &
yarn install:solid &
yarn install:svelte &
yarn install:vue &
yarn install:host