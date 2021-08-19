## functions 
verifyUserInput() {
  local userInputValue="$1"
  local defaultValue="$2"

  if [[ $userInputValue != "" ]];
  then
    retval=$userInputValue
  else
    retval=$defaultValue
  fi
}


## constants
appNameTarget="<app-name>"
appAuthorTarget="<app-author>"
appShortcutTarget="<app-shortcut>"
appRepositoryTarget="<app-repository>"
appDescriptionTarget="<app-description>"

defaultProjectName="React Javascript Boilerplate"
defaultProjectShortcut="react-javascript-boilerplate"
defaultProjectDescription="Minimal javascript boilerplate for React apps."
defaultProjectAuthor="Paweł Wojtasiński <pawel.wojtasinski.1995@gmail.com>"
defaultProjectRepository="git@github.com:playerony/react-javascript-boilerplate.git"


## read input data
read -p "Enter project name (default: '$defaultProjectName'): " userInputProjectName
read -p "Enter project shortcut (default: '$defaultProjectShortcut'): " userInputProjectShortcut
read -p "Enter project description (default: '$defaultProjectDescription'): " userInputProjectDescription
read -p "Enter project author (default: '$defaultProjectAuthor'): " userInputProjectAuthor
read -p "Enter project repository (default: '$defaultProjectRepository'): " userInputProjectRepository


## replace empty values with defaults
verifyUserInput "$userInputProjectName" "$defaultProjectName"
projectName=$retval

verifyUserInput "$userInputProjectShortcut" "$defaultProjectShortcut"
projectShortcut=$retval

verifyUserInput "$userInputProjectDescription" "$defaultProjectDescription"
projectDescription=$retval

verifyUserInput "$userInputProjectAuthor" "$defaultProjectAuthor"
projectAuthor=$retval

verifyUserInput "$userInputProjectRepository" "$defaultProjectRepository"
projectRepository=$(echo "$retval" | sed 's#/#\\/#g')


## replace tags in files with strings

# README.md
sed -i -e "s/$appNameTarget/$projectName/g
           s/$appDescriptionTarget/$projectDescription/g" README.md

# package.json
sed -i -e "s/$appAuthorTarget/$projectAuthor/g
           s/app-shortcut/$projectShortcut/g
           s/$appRepositoryTarget/$projectRepository/g
           s/$appDescriptionTarget/$projectDescription/g" package.json

# ./public/manifest.json
sed -i -e "s/$appNameTarget/$projectName/g" ./public/manifest.json

# ./public/index.html
sed -i -e "s/$appNameTarget/$projectName/g
           s/$appDescriptionTarget/$projectDescription/g" ./public/index.html

# ./src/app/app.component.jsx
sed -i -e "s/$appShortcutTarget/$projectShortcut/g" ./src/app/app.component.jsx


## remove all created files
find . -name "*-e" -type f -delete


## install all packages
yarn install
