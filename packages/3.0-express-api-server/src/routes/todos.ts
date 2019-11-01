import { Router } from "express";
import { Todo, getRepository } from "../models";

const router = Router();

router.get("/", async (req, res) => {
  const todoRepository = getRepository(req, Todo);
  const todos = await todoRepository.find();
  res.status(200).json(todos);
});

router.get("/:id", async (req, res) => {
  const todoRepository = getRepository(req, Todo);
  const todo = await todoRepository.findOne(req.params.id);
  res.status(200).json(todo);
});

router.post("/", async (req, res) => {
  const todoRepository = getRepository(req, Todo);
  const todo = await todoRepository.create(req.body);
  const results = await todoRepository.save(todo);
  res.status(200).json(results);
});

router.put("/:id", async (req, res) => {
  const todoRepository = getRepository(req, Todo);
  const todo = await todoRepository.findOne(req.params.id);
  todoRepository.merge(<Todo>todo, req.body);
  const results = await todoRepository.save(<Todo>todo);
  res.status(200).json(results);
});

router.delete("/:id", async (req, res) => {
  const todoRepository = getRepository(req, Todo);
  const results = await todoRepository.delete(req.params.id);
  res.status(200).json(results);
});

export default router;
