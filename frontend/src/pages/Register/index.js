import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import LogoImg from "../../assets/logo.svg";
import api from "../../services/api";

const Register = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    city: "",
    uf: ""
  });

  const handleRegister = async e => {
    e.preventDefault();
    try {
      const response = await api.post("/ongs", form);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push("/");
    } catch (error) {
      alert("Erro no cadastro, tente novamente.");
    }
  };

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG
            <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#E02041" />
              Voltar para o logon
            </Link>
          </p>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder=" WhatsApp"
            value={form.whatsapp}
            onChange={e => setForm({ ...form, whatsapp: e.target.value })}
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              value={form.city}
              onChange={e => setForm({ ...form, city: e.target.value })}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={form.uf}
              onChange={e => setForm({ ...form, uf: e.target.value })}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
