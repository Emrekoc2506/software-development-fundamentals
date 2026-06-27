// src/login.jsx



export const Kullanicilar = [
    {
        username: "enes",
        password: "1"
    },
    {
        username: "emre",
        password: "2"
    }
]




function Login() {
    return (
        <div>
            <div>
                <h3>Kullanıcı Adı</h3>
                <input type="text" />
                <hr />
            </div>
            <div>
                <h3>Şifre</h3>
                <input type="password" />
            </div>
            <div>
                <button>Giriş Yap</button>
            </div>
        </div>
    );
}

export default Login;   