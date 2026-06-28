1. מאגר נועד כדי לנהל גרסאות ולשמור גיבוי לפרויקט שלי.
2. git Init
3. .git - בתוכה נשמרים קבצים לאחר כל commit

1. הוקבץ קודם נמצא רק בסביבת העבודה שליולא מקודר עם ההיסטוריה,
לאחר כך מעבירים אותו לstaging area ששם הוא מחכה לcommit שיתן לו תיאור ויכניס אותו להיסטוריה שלי.

2. git add. , git commit -m "msg"
3. ההבדל האם הקובץ התחיל תהליך שמירה או לא

1. git diff
2. git log
3. git diff <> <>
4. מצב הקבצים מול מצב הconnits

1. קבצי התקנות וקבצים עם פרטים סודיים
2.
node_modules/
env.
3. הקבצים היו גלויים לכל מי שיש גישה לrepo

תרגיל 5

git init
git status
echo .gitignore > __pycache__/
echo .gitignore >> secrets.json
git add app.py
git commit -m "create app.py"
git diff --staged
git add app.py
git commit -m "modify app.py"
git log
