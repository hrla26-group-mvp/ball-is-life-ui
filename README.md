# ball-is-life

# commit message tags
[ops] - documentation
[prog] - progress on feature
[tests] - tests
[feat] - completes a feature
[refactor] - refactor some code
[fix] - fixes feature or bugs (edited) 

# add state process
  add actiontype to actions/actionTypes.js
  add actionCreator fn to actions/[feature name]
  create container in containers/
  add reducer to reducers/[feature name] AND reducers/main.js

# rebase process
create org repo
everyone clone org repo
create feature branch
git checkout -b FEATURE_NAME
work on feature branch
when finished
git push origin FEATURE_NAME
make pull request from feature branch to master

to get latest changes
git checkout master
git pull origin master
git checkout FEATURE_NAME
git rebase master
MASTER ONLY PULL AND REBASE
