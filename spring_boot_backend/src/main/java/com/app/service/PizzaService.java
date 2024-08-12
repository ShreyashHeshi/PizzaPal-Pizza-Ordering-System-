package com.app.service;

import java.util.List;

import com.app.DTO.PizzaDTO;
import com.app.entity.Pizza;

public interface PizzaService {
	
	List<Pizza> getAllPizza();
	
	Pizza addPizza(PizzaDTO pdto);
	
	Pizza deletePizza(Long pizzaId);
	
	void initRolesAndUser();

}
