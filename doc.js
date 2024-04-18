/* doucumentationPS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> npx express-generator --view=ejs &&      
In Zeile:1 Zeichen:34
+ npx express-generator --view=ejs &&
+                                  ~~
Das Token "&&" ist in dieser Version kein gültiges Anweisungstrennzeichen.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : InvalidEndOfLine
 
PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> npx express-generator --view=ejs    

   create : public\
   create : public\javascripts\
   create : public\images\
   create : public\stylesheets\
   create : public\stylesheets\style.css
   create : routes\index.js
   create : routes\users.js
   create : views\
   create : views\error.ejs
   create : views\index.ejs
   create : app.js
   create : package.json
   create : bin\
   create : bin\www
   install dependencies:
     > npm install

   run the app:
     > SET DEBUG=pong:* & npm start

PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> npm i

added 54 packages, and audited 55 packages in 3s



PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> npm audit fix --force
added 58 packages, changed 14 packages, and audited 113 packages in 7s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> node -v
v21.6.2
PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> git remote add origin https://github.com/Kiamanlac/pong.git

fatal: not a git repository (or any of the parent directories): .git
PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> git init
Initialized empty Git repository in C:/Users/Student/Desktop/gfn Weiterbildung/Javascript/pong/.git/
PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> git remote add origin https://github.com/Kiamanlac/pong.git

PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> git branch -M main
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        app.js
        bin/
        package.json
        public/
        routes/
        views/

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> git add .
warning: in the working copy of 'app.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'bin/www', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/stylesheets/style.css', LF will be replaced by CRLF the next time Git touches it  
warning: in the working copy of 'routes/index.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'routes/users.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'views/error.ejs', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'views/index.ejs', LF will be replaced by CRLF the next time Git touches it
PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> git -h
usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--config-env=<name>=<envvar>] <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   .gitignore
        new file:   bin/www
        new file:   package-lock.json
        new file:   package.json
        new file:   public/stylesheets/style.css
        new file:   routes/index.js
        new file:   routes/users.js
        new file:   views/error.ejs
        new file:   views/index.ejs

PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> git commit -m 'initial commit'
 10 files changed, 1341 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 app.js
 create mode 100644 bin/www
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 public/stylesheets/style.css
 create mode 100644 routes/index.js
 create mode 100644 routes/users.js
 create mode 100644 views/error.ejs
 create mode 100644 views/index.ejs
PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> git push
fatal: The current branch main has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin main

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong>  git push --set-upstream origin main
Enumerating objects: 17, done.
Counting objects: 100% (17/17), done.
Delta compression using up to 8 threads
Compressing objects: 100% (13/13), done.
Writing objects: 100% (17/17), 12.63 KiB | 1.26 MiB/s, done.
Total 17 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/Kiamanlac/pong.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong></file>
PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> git checkout -b tutorial
Switched to a new branch 'tutorial'
PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> history

  Id CommandLine
  -- -----------
   1 try { . "c:\Users\Student\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\workbench\contrib\termina... 
   2 npx express-generator --view=ejs &&
   3 npx express-generator --view=ejs
   4 npm i
   5 npm audit fix --force
   6 node -v
   7 git remote add origin https://github.com/Kiamanlac/pong.git
   8 git init
   9 git remote add origin https://github.com/Kiamanlac/pong.git
  10 git branch -M main
  11 git status
  12 git add .
  13 git -h
  14 git status
  15 git commit -m 'initial commit'
  16 git push
  17  git push --set-upstream origin main
  18 git status
  19 git checkout -b tutorial


PS C:\Users\Student\Desktop\gfn Weiterbildung\Javascript\pong> 