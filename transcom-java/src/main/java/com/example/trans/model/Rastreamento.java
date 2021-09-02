package com.example.trans.model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//import lombok.Data;


//@Data
@Entity
public class Rastreamento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
	@Column(nullable = false)
	private String cidadeOrigem;
	private String estadoOrigem;
	private String cidadeDestino;
	private String estadoDestino;
	private String cidadeLocalizacao;
	private String estadoLocalizacao;
	private String dataEnvio;
	private String dataPrevisao;
	private String dataEntrega;
	private String status;

	public String getEstadoOrigem() {
		return estadoOrigem;
	}

	public void setEstadoOrigem(String estadoOrigem) {
		this.estadoOrigem = estadoOrigem;
	}

	public String getCidadeDestino() {
		return cidadeDestino;
	}

	public void setCidadeDestino(String cidadeDestino) {
		this.cidadeDestino = cidadeDestino;
	}

	public String getEstadoDestino() {
		return estadoDestino;
	}

	public void setEstadoDestino(String estadoDestino) {
		this.estadoDestino = estadoDestino;
	}

	public String getCidadeLocalizacao() {
		return cidadeLocalizacao;
	}

	public void setCidadeLocalizacao(String cidadeLocalizacao) {
		this.cidadeLocalizacao = cidadeLocalizacao;
	}

	public String getEstadoLocalizacao() {
		return estadoLocalizacao;
	}

	public void setEstadoLocalizacao(String estadoLocalizacao) {
		this.estadoLocalizacao = estadoLocalizacao;
	}

	public String getDataEnvio() {
		return dataEnvio;
	}

	public void setDataEnvio(String dataEnvio) {
		this.dataEnvio = dataEnvio;
	}

	public String getDataPrevisao() {
		return dataPrevisao;
	}

	public void setDataPrevisao(String dataPrevisao) {
		this.dataPrevisao = dataPrevisao;
	}

	public String getDataEntrega() {
		return dataEntrega;
	}

	public void setDataEntrega(String dataEntrega) {
		this.dataEntrega = dataEntrega;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getCidadeOrigem() {
		return cidadeOrigem;
	}

	public void setCidadeOrigem(String cidadeOrigem) {
		this.cidadeOrigem = cidadeOrigem;
	}

	@Override
	public int hashCode() {
		return Objects.hash(codigo);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Rastreamento other = (Rastreamento) obj;
		return Objects.equals(codigo, other.codigo);
	}

}
