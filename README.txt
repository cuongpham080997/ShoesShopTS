# 
- devDependencies: Hỗ trợ trong quá trình phát triển phần mềm.
- dependencies: Cần cho quá trình chạy dự án thực tế khi build
- dependencies: Cần cho quá trình khi build lên production.

# Folder Components là folder cho phép bất kỳ folder nào cũng truy cập vào được

# styled-components: css in js
- Cách tạo 1 component chỉ quản style
- Cách truyền và nhận props của component
- Typescript: Định nghĩa props cho component



# Sử dụng formik

## 1. useFormik

- Ưu điểm: Code thủ công nên người mới dễ đọc hiểu từng chức năng của code.
- Nhược điểm: Code từ đầu, nếu tách component thành nhỏ thì phải truyền props từ component cha sử dụng useFormik xuống đến component con sài cái input, checkbox, radio, ... => dài dòng

- Demo: `1.tsx`

## 2. Các component có sẵn của Formik

- Ưu điểm: Nhanh gọn, sử dụng context nên không phải truyền props nhiều nếu như có tách component như trường hợp `1.tsx`
- Nhược điểm: Vì code bằng context nên người mới làm quen đọc không rõ ràng và tường mình vì mọi thứ điều đã được xử lý giúp chúng ta..

- Demo: `2.tsx`


# Vấn đề:
- Mỗi lần gọi api get profile là chúng ta lại lưu lên trên redux
- Gọi 2 lần thì cần connect để lưu lên trên redux 2 lần

# Cách giải quyết:
- middle ware redux: thunk
