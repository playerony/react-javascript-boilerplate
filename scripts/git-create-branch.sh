branch="$1"

if [ -z "$branch" ]; then
  echo 'Error: branch was not specified!'

  exit 1
fi

exists=`git show-ref refs/heads/$branch`
if [ -n "$exists" ]; then
  echo 'Error: branch already exists!'
fi

git branch $branch
git checkout $branch
