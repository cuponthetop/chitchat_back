BRANCH=`git rev-parse --abbrev-ref HEAD`

apidoc="./node_modules/.bin/apidoc"

# generate status_api.js
node ./util/status_api_creator.js

git add ./lib/app/route/status_api.js ./lib/app/route/status_all.js

git commit -m "status_api autogen"

git push origin $BRANCH

out=$($apidoc -i ./lib/app/route/ -o apidocout/ 2>&1)
status=$?
if [ "$status" != "0" ]; then
    rm -rf apidocout/
    git checkout $BRANCH
    echo "$out"
    exit $status
fi

# change to gh-pages branch
git checkout gh-pages

rm -rf apidoc/

cp -r apidocout apidoc

git add apidoc/

git commit -m "api doc update"

git push origin gh-pages

# change to original branch
git checkout $BRANCH

rm -rf apidocout/