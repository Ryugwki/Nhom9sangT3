package vn.vietchu.jobhunter.domain.request;

import jakarta.validation.constraints.NotBlank;

public class ReqLoginDTO {
    @NotBlank(message = "tên người dùng không được để trống")
    private String username;

    @NotBlank(message = "mật khẩu không được để trống")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
