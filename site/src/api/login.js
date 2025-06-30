import axios from "axios";

export async function login(email, password) {
  const dados = { email, password };

  try {
    const res = await axios.post("http://codexa-1.onrender.com/auth/login", dados);
    const token = res.data.token;

    // Salvar o token (opcional)
    localStorage.setItem("token", token);

    return {
      success: true,
      message: res.data.message,
      token: token,
    };
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Erro ao tentar fazer login.",
    };
  }
}
