Last login: Thu Jun 23 15:18:29 on ttys000
Daniels-MacBook-Pro:~ pciporin$ cd Documents
Daniels-MacBook-Pro:Documents pciporin$ cd Summer\ 16
Daniels-MacBook-Pro:Summer 16 pciporin$ ls
FAC
Kustomer
React.js Introduction For People Who Know Just Enough jQuery To .webloc
To Do
test_dir
Daniels-MacBook-Pro:Summer 16 pciporin$ cd test_dir
Daniels-MacBook-Pro:test_dir pciporin$ git init
Initialized empty Git repository in /Users/pciporin/Documents/Summer 16/test_dir/.git/
Daniels-MacBook-Pro:test_dir pciporin$ git status
On branch master

Initial commit

nothing to commit (create/copy files and use "git add" to track)
Daniels-MacBook-Pro:test_dir pciporin$ git diff
Daniels-MacBook-Pro:test_dir pciporin$ git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	README.md

nothing added to commit but untracked files present (use "git add" to track)
Daniels-MacBook-Pro:test_dir pciporin$ git diff
Daniels-MacBook-Pro:test_dir pciporin$ git add README.md
Daniels-MacBook-Pro:test_dir pciporin$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   README.md

Daniels-MacBook-Pro:test_dir pciporin$ git commit
Aborting commit due to empty commit message.
Daniels-MacBook-Pro:test_dir pciporin$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   README.md

Daniels-MacBook-Pro:test_dir pciporin$ git diff
Daniels-MacBook-Pro:test_dir pciporin$ git commit -m "Add readme"
[master (root-commit) 7c7696f] Add readme
 Committer: Peter Ciporin <pciporin@Daniels-MacBook-Pro.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 1 insertion(+)
 create mode 100644 README.md
Daniels-MacBook-Pro:test_dir pciporin$ git status
On branch master
nothing to commit, working directory clean
Daniels-MacBook-Pro:test_dir pciporin$ git log
commit 7c7696fca722f7f721a57b94dffe1fa778168024
Author: Peter Ciporin <pciporin@Daniels-MacBook-Pro.local>
Date:   Thu Jun 23 16:33:45 2016 -0400

    Add readme
Daniels-MacBook-Pro:test_dir pciporin$ git log --summary
commit 7c7696fca722f7f721a57b94dffe1fa778168024
Author: Peter Ciporin <pciporin@Daniels-MacBook-Pro.local>
Date:   Thu Jun 23 16:33:45 2016 -0400

    Add readme

 create mode 100644 README.md
Daniels-MacBook-Pro:test_dir pciporin$ git remote add origin https://github.com/pciporin25/test_repo.git
Daniels-MacBook-Pro:test_dir pciporin$ git push -u origin master
Username for 'https://github.com': pciporin25
Password for 'https://pciporin25@github.com': 
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/pciporin25/test_repo.git/'
Daniels-MacBook-Pro:test_dir pciporin$ git push -u origin master
Username for 'https://github.com': pciporin25
Password for 'https://pciporin25@github.com': 
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/pciporin25/test_repo.git/'
Daniels-MacBook-Pro:test_dir pciporin$ brew update
Updated Homebrew from 8f75706 to 66cda61.
Updated 1 tap (homebrew/core).
==> New Formulae
b2sum       convox      digdag      flake8      homeshick   mimetic     pick        urweb     
==> Updated Formulae
afl-fuzz                fluent-bit              libarchive              pianobar              
agda                    fossil                  libcouchbase            pidgin                
airspy                  freeling                libfixposix             pike                  
ammonite-repl           fwup                    libfreenect             pius                  
android-ndk             fzf                     libgcrypt               planck                
apcupsd                 gammaray                libgetdata              platformio            
appscale-tools          gauge                   libgpg-error            pngquant              
aptly                   gdnsd                   libgsf                  poco                  
aria2                   geoserver               libgxps                 poppler               
artifactory             gettext                 libmagic                redis                 
assh                    ghex                    libmicrohttpd           riak                  
augeas                  ghi                     libmodbus               ringojs               
autojump                git-annex               libmowgli               rmate                 
aws-sdk-cpp             git-fixup               libmtp                  roundup               
awscli                  git-standup             libofx                  rswift                
axel                    gmp                     libproxy                saltstack             
bacula-fd               gnatsd                  libwebsockets           scalariform           
bam                     gnu-apl                 libxmp                  scamper               
baresip                 gnu-units               liquibase               scons                 
bash                    gnumeric                lldpd                   sec                   
bear                    godep                   llnode                  serialosc             
bib-tool                goffice                 logstash                shadowsocks-libev     
bibtexconv              gollum                  logtalk                 snappystream          
bltool                  gpac                    luvit                   sshguard              
brotli                  gputils                 luyten                  stormpath-cli         
bullet                  gradle                  mercurial               subliminal            
carthage                groonga                 mikmod                  swig                  
ccache                  gssdp                   miller                  syncthing             
ccextractor             gti                     mkvtoolnix              syntaxerl             
ccm                     gtk-gnutella            mlt                     taglib                
certbot                 gupnp                   monetdb                 taylor                
cgrep                   harfbuzz                mono                    texinfo               
chapel                  headphones              mosquitto               tile38                
cheat                   help2man                mpop                    tmux-mem-cpu-load     
citus                   heroku                  multimarkdown           tomcat                
clamav                  html-xml-utils          mysql-sandbox           twoping               
clojurescript           ibex                    mysqltuner              vapoursynth           
crystal-lang            idris                   nanomsg                 vault                 
dar                     ipfs                    ncmpcpp                 vdirsyncer            
dateutils               ipmitool                neo4j                   viennacl              
dependency-check        isl                     node ✔                  vim                   
desktop-file-utils      jboss-forge             nodebrew                vowpal-wabbit         
diff-pdf                jemalloc                nsd                     wakatime-cli          
diff-so-fancy           jenkins                 nsq                     wartremover           
docker-cloud            jfrog-cli-go            ntl                     when                  
docker-swarm            jlog                    osxfuse                 wine                  
dockviz                 jpegrescan              parallel                winetricks            
dos2unix                jsdoc3                  passpie                 wrk                   
drake                   jvgrep                  pcre                    xmake                 
dvtm                    kafka                   pcsc-lite               xorriso               
elixir                  kobalt                  pdf2htmlex              yle-dl                
expat                   lcdproc                 pelikan                 youtube-dl            
fio                     lcm                     pgbadger              
flatcc                  leafnode                pgroonga              
flow                    lhasa                   pgtap                 
==> Renamed Formulae
wires -> geckodriver
==> Deleted Formulae
nant            openwsman       pylucene        skytools        vcodex          wsmancli      
ninja-ide       orfeo           signing-party   swatchbooker    vmalloc       
Daniels-MacBook-Pro:test_dir pciporin$ brew install git
==> Downloading https://homebrew.bintray.com/bottles/git-2.9.0.yosemite.bottle.tar.gz
######################################################################## 100.0%
==> Pouring git-2.9.0.yosemite.bottle.tar.gz
==> Caveats
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d

zsh completion has been installed to:
  /usr/local/share/zsh/site-functions

Emacs Lisp files have been installed to:
  /usr/local/share/emacs/site-lisp/git
==> Summary
🍺  /usr/local/Cellar/git/2.9.0: 1,424 files, 31.4M
Daniels-MacBook-Pro:test_dir pciporin$ git config --global credential.helper osxkeychain
Daniels-MacBook-Pro:test_dir pciporin$ git push -u origin master
Username for 'https://github.com': pciporin25
Password for 'https://pciporin25@github.com': 
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/pciporin25/test_repo.git/'
Daniels-MacBook-Pro:test_dir pciporin$ git push -u origin master
Username for 'https://github.com': pciporin25
Password for 'https://pciporin25@github.com': 
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/pciporin25/test_repo.git/'
Daniels-MacBook-Pro:test_dir pciporin$ git push -u origin master
Username for 'https://github.com': pciporin25
Password for 'https://pciporin25@github.com': 
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/pciporin25/test_repo.git/'
Daniels-MacBook-Pro:test_dir pciporin$ git push -u origin master
Username for 'https://github.com': pciporin25
Password for 'https://pciporin25@github.com': 
remote: Permission to pciporin25/test_repo.git denied to pciporin25.
fatal: unable to access 'https://github.com/pciporin25/test_repo.git/': The requested URL returned error: 403
Daniels-MacBook-Pro:test_dir pciporin$ git push -u origin master
Username for 'https://github.com': pciporin25
Password for 'https://pciporin25@github.com': 
remote: Permission to pciporin25/test_repo.git denied to pciporin25.
fatal: unable to access 'https://github.com/pciporin25/test_repo.git/': The requested URL returned error: 403
Daniels-MacBook-Pro:test_dir pciporin$ git remote -v
origin	https://github.com/pciporin25/test_repo.git (fetch)
origin	https://github.com/pciporin25/test_repo.git (push)
Daniels-MacBook-Pro:test_dir pciporin$ git --version
git version 2.5.4 (Apple Git-61)
Daniels-MacBook-Pro:test_dir pciporin$ git remote set-url origin git@github.com:pciporin25/test_repo.git
Daniels-MacBook-Pro:test_dir pciporin$ git remote -v
origin	git@github.com:pciporin25/test_repo.git (fetch)
origin	git@github.com:pciporin25/test_repo.git (push)
Daniels-MacBook-Pro:test_dir pciporin$ git push -u origin master
Warning: Permanently added the RSA host key for IP address '192.30.252.123' to the list of known hosts.
Counting objects: 3, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 287 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To git@github.com:pciporin25/test_repo.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.
Daniels-MacBook-Pro:test_dir pciporin$ git pull
remote: Counting objects: 4, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), done.
From github.com:pciporin25/test_repo
   7c7696f..064861e  master     -> origin/master
Updating 7c7696f..064861e
Fast-forward
 README.md | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
Daniels-MacBook-Pro:test_dir pciporin$ git stash list
Daniels-MacBook-Pro:test_dir pciporin$ exit
logout

[Process completed]

