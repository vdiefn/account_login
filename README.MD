## 帳密檢查專案Part1 (Account Login Simple Project)
### 這是一張登入頁面來讓使用者提供帳號密碼給伺服器進行身分確認


## 功能
- 使用者在表單裡輸入帳密：email & password。
- 如果找不到該名使用者，或是密碼錯誤，就彈回登入頁並且在介面上顯示「Email 或 Password 錯誤」。
- 如果 email + password 組合正確，使用者就會進入自己的 welcome page，在此頁面上會顯示登入使用者的名字。


## 環境需求
- Node.js
- Express
- Express-handlebars
- Mongoose


## 開始使用
- clone專案至本機電腦
- 進入專案資料夾
- 專案下載完成後輸入npm install
- 安裝完成後接續安裝Express, express-handlebars, mongoose
- 新增.env檔案設定環境變數，並加入MONGODB_URI = mongodb-srv......
- 新增種子資料npm run seed
- 安裝完成後輸入npm run dev
- 成功啟動後會於終端機看到：Express is running on http://localhost:3000
- 於瀏覽器輸入http://localhost:3000 後可開始使用
