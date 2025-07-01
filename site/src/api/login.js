import axios from "axios";

export const login = async (email, password) => {
  try {
    const res = await axios.post("http://localhost:3001/auth/login", {
      email,
      password
    });

    // Salvar o token no localStorage (opcional)
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }

    return {
      success: true,
      message: res.data.message
    };
  } catch (err) {
    if (err.response && err.response.data && err.response.data.error) {
      return {
        success: false,
        message: err.response.data.error
      };
    }

    return {
      success: false,
      message: "Erro na conexão com o servidor."
    };
  }
};
