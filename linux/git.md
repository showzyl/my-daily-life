### git study

* git config --list 显示当前的git配置
* git init 初始化
* git add 添加文件到暂存区
* git commit -m 'something' 把暂存区的文件提交到当前分支
* git status 列出有改动的文件
* git diff filename 对比文件的改动  
* git log 列出提交历史 
* git reset --hard version 指针指向某个版本
* git reflog 查看操作记录
* git checkout(co) -- filename 撤销某文件修改
* git checkout(co) 分支名 切换分支
* git rm filename 暂存区删除某个文件
* git remote add origin git@github.com:showzyl/learngit.git 添加远程仓库
* git remote rm origin git@github.com:showzyl/learngit.git 删除远程仓库
* git pull -r \[remotename\] \[localBranchName\] 拉取远程仓库
* git push \[remotename\] \[localBranchName\] 推送远程仓库
* git remote -v 查看远程库信息
* git push -u origin master  推送到远程仓库
* git checkout -b 分支名 创建并切换分支
* git branch(br) 查看当前分支
* git merge 分支名  合并分支
* git rebase `衍合`操作 todo study
* git branch -d 分支名 删除分支
* git stash 把文件放进暂存区
* git stash pop 恢复暂存区的文件
* git stash list 列出暂存区的文件
* git stash clear 清理暂存区
* git pull 抓取远程最新提交
* git co . && git clean -xdf  恢复到分支最初状态
* git push origin gh-pages  github pages
* git co - 切换回刚才的分支
* git tag -a v1.4 -m 'my msg' 新增tag
* git push origin --tags 推送所有tag
* git push origin v0.0.1 推送某个版本tag
* git tag -d v0.0.1 删除某个版本
* git push origin :refs/tags/v0.0.1 删除后推送远程
* git reset --soft v1.4  没有`push`的版本回滚
* git revert xxx 提交后的回滚某版本,此版本之后的改动消失.`慎用`
* git shortlog -s | sort -rn | head 输出git repo中前十位最活跃的提交者

























