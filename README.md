# Những folders và packages cần thiết

1. tạo file _server.js_
   để làm gì: _khởi động network_ nodejs
2. _npm init -y_
   tạo ra file package.json

## Tạo folder

3. tạo folder _models_ trong src
   để làm gì: ánh xạ tới controllers

4. tạo folder _controllers_ trong src
   để làm gì: để gió cuốn đi

5. tạo folder _services_ trong src
   để làm gì: để gió cuốn đi

6. tạo folder _utils_ trong src
   để làm gì: để chứa các hàm, các class, các tính năng mà chúng ta thường hay sử dụng

7. tạo folder _configs_ trong src
   để làm gì: để gió cuốn đi

# Tạo packages

8. npm i express --save

9. npm i morgan --save-dev

   1. để làm gì: thư viện để in ra các log mà một người chạy 1 cái request
   2. có 5 loại
      morgan('dev')
      +khi đang ở dev thì dùng này
      morgan('combined')
      ip của người request vs thời gian request vs phương thức GET vs HTTP 1 vs status 500 vs chạy bằng curl
      - khi ở product thì dùng này
        morgan('common')
        +Nhật kí chung của apache
        morgan('short')
        +chỉ bao gồm thời gian phản hồi mà thôi
        morgan('tiny')
        morgan('dev')

10. npm i helmet
    để làm gì: bảo vệ thông tin riêng tư của chúng ta, ngăn chặn những trang thứ 3 đọc cokie
    curl http://localhost:3055 --include: cho phép chúng ta xem những cái header của hệ thống của chúng ta trong file curl

11. npm i compression
    để làm gì: để giảm băng thông khi ta gửi đến người dùng

## section 3

sự khác nhau giữ folder utils và helpers

utils và các function dùng ở tần xuất nhiều
helpers dùng chỉ khi cần sử dụng

### kiểm tra số lượng connect của mongoodb bằng file check.connect.js trong folder helpers

### Thông báo khi server quá tải connect

nguyên tắc lập trình không được nhúng số nào vô code hết

## Section 4: Lịch sử của .env và cách kết hợp env và configs cho dự án nhiều môi trường và Members

1. Tại sao lại cần file .env liệu không cần có được không
   -Dùng để làm gì: tách biệt thông tin nhạy cảm khỏi code của chúng ta, giúp code chúng ta sạch sẽ và bảo trì code trơn tru hơn cũng như an toàn hơn vì không lưu vào các văn bản thuần túy
2. Sự khác nhau giữa file .env và file config
   \_config dùng để kiểm soát lưu trữ cài đặt ứng dụng chúng ta mà có thể kiểm soát được code
