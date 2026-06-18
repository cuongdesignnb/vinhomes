# AGENT DOCKER SETUP - VINHOMES

Mục tiêu: thiết lập Docker local cho dự án Vinhomes với port cao để tránh trùng dự án khác.

Port đề xuất:
- Web: 43873 mapping vào 3000
- API: 43874 mapping vào 8000
- Database: 43875 mapping vào 3306
- Redis: 43876 mapping vào 6379
- Mail: 43877 mapping vào 8025

Tên project Docker: vinhomes_lux_43873.

Agent cần tạo Dockerfile, docker-compose.yml, .dockerignore, .env.docker.example và cập nhật README. Không commit node_modules, build output, env thật hoặc file tạm.

Sau khi hoàn thiện, kiểm tra build, commit thay đổi với thông điệp chore: setup Docker for Vinhomes local development và đẩy lên nhánh hiện tại.
