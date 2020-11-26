(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{641:function(n,t){n.exports="\x3c!--\ntitle: Linux脚本 \nsort: 1\n--\x3e\n\n## find\n```bash\nfind . -size +10M -print | xargs ls -lh\nfind . -size +10M -print\nfind . -mmin/-mtime -9 -print\nfind . -name *.txt -print\n```\n\n## bash\n```bash\nps -mp 12653 -o THREAD,tid,time //java进程线程及使用时间\nstrace -p xxx\npv //显示执行进度\nctrl+a 行首  ctrl+e 行尾\n\ngrep '请求方法' gateway-router.log |awk '{print $9}' | awk '{a[$1]+=1;} END {for(i in a){print a[i]\" \"i;}}' \\\n| sort -t \" \" -k 1 -n -r |head -n20\ngrep '请求方法' gateway-router.log |awk '{print $11,$2,$9}'|sort -nr |head -n20\n\nps -ef |grep hello |awk '{print $2}'|xargs kill -9\n```\n\n## vi\n```bash\n#全局替换\n:%s/vivian/sky/g\n#另存部分内容\n:start,end/$ w filename\n```\n\n## ssh\n```bash\nssh -CNfg -L 22022:xx.xxx.com:80 root@127.0.0.1\nssh -i ./id_rsa root@127.0.0.1\n```\n\n## screen/tmux\n```bash\n#new\nscreen -r/R name\n#Detach\nctrl-a-d/screen -d\n-x   Attach to a not detached screen. (Multi display mode).\n```\n\n## 压力测试\n```bash\n#for i in `seq 1 10`; do dd if=/dev/zero of=/dev/null & done\nstress -c 4\nstress --vm 1 --vm-bytes 400M\n\niotop\niostat -d -k 1 10         #查看TPS和吞吐量信息(磁盘读写速度单位为KB)\niostat -d -m 2            #查看TPS和吞吐量信息(磁盘读写速度单位为MB)\niostat -d -x -k 1 10      #查看设备使用率（%util）、响应时间（await） \niostat -c 1 10            #查看cpu状态\n```\n\n## 网络\n```bash\nnetstat -lnpt\nss -s //SSOCKET使用情况,比netstat更快速更高效\n\nip netns (network namespace)\n\ndmesg -T | less\ndmesg -T --level=err,warn | less\n\n###登录错误次数\npam_tally2 --user root\npam_tally2 --user root --reset\n```\n\n"}}]);