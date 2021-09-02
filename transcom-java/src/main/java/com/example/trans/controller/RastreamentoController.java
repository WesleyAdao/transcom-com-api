package com.example.trans.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.trans.model.Rastreamento;
import com.example.trans.repository.RastreamentoRepository;


@RestController
@RequestMapping("/rastreamento")

public class RastreamentoController {

	@Autowired
	private RastreamentoRepository rastreamentoRepository;
	
	@GetMapping
	public List<Rastreamento> listar() {
		return rastreamentoRepository.findAll();
	}
	
	@PostMapping
	public Rastreamento adicionar(@RequestBody Rastreamento rastreamento) {
		return rastreamentoRepository.save(rastreamento);
	}
}
