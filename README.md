! [rejected] main -> main (fetch first)
✅ Fix (Recommended Method)

Run this command first to pull the remote changes:

git pull origin main --rebase

Then push again:

git push -u origin main
🟢 Full Correct Command Order

Inside your project folder run:

git add .
git commit -m "update project"
git pull origin main --rebase
git push -u origin main
⚠️ If you want to overwrite the GitHub repo completely

(Only if the repo has nothing important)

git push -f origin main

This force pushes and replaces everything in the repo.

💡 Quick Check

Open your repo:

https://github.com/digosoft/advchanchalgupta

If you see README.md already there, that's why the error happened.
