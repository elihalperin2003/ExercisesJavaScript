1. כשיש קוד שכבר עובד ואנחנו רוצים להוסיף עוד פיצ'ר או עוד כמה פיצ'רים במקביל, כדאי לא לגעת במוצר הקיים כבר.
2. ההבדל בין הגרסה המרכזית לגרסה שבאמצע העריכה
3. לא, הוא רק מצביע על העדכון האחרון בגרסה הראשית

1. git checkout -b fix/login-error
2. git switch fix/login-error
3. git checlout main

1. מצביע על הנתיב הנוכחי
2. יצביע על הנתיב הראשי
3. לא נכון תלוי באיזה ענף נמצאים

1. על הענף המרכזי
2. git checkout main, git merge feature/signup-form
3. git branch -d feature/signup-form
4. כדי שהזרימה של הפרויקט תהיה נקייה

תרגיל 5

1. git checkout -b feature/notifications
2. git add .
3. git commit -m "msg"
4. git branch
5. git checkout main
6. git checkout feature/notifications
7. git checkout main
8. git merge feature/notifications
9. git branch -d feature/notifications

