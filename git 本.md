# git reflog 查看版本

![image-20221021212730602](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221021212730602.png)

前面七位是版本号

# git log查看详细日志命令





# git status 查看本地库状态 红色表示还没被git追踪, 可以通过git add+文件名提交到暂存区,这时候git status发现文件名为绿色这时候可以git commit -m+"提交信息"





# cat 加文件名 查看文件内容





# 版本穿梭 : 通过git reflog 或者git log查看版本和版本号,然后通过git reset --hard +版本号就可以穿梭回去

# 分支

## git branch+分支名   创建分支

## git branch-v  查看分支

## git checkout +分支名  切换分支

## git merge +分支名  把指定的分支合并到当前分支上

## git merge +分支名  合并正常分支

##    冲突合并



##  git rebase -i master 变基 合并 



# git init --bare # 创建远程仓库,可以服务别的访客

![image-20221021235907580](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221021235907580.png)



# git revert +版本号 删除指定版本的文件



# git cherry-pick +版本号 挑选(捡出)一些版本的代码





# git remote add +仓库名 添加远程仓库路径



# git remote remove + 仓库名 删除远程仓库路径



# git remote  -v 查看远程仓库路径



# git rm --cached 文件名  从暂存区移除文件



# git commit --amend  #修正上次的提交





# git push 远程别名 远程分支名 



# git  fetch 远程别名  拉去代码



# git branch -r 查看本地的远程分支



# git pull  远程别名 远程分支名



# 回滚 git reset

##  --soft 软回滚 (只重置仓库的版本号)

## --mixed 混合回滚 (重置仓库号`暂存区)

## --hard 硬回滚 (重置仓库的版本号,暂存区,工作区)

## 