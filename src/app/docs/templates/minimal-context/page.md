---
title: "Minimal Context Template"
---

# Minimal Context Template

A lightweight, reusable context template for general purpose LLM interactions.

## Overview

This template provides a minimal viable context structure that includes:
- System instructions and role definition
- Memory management with conversation history
- Token budget optimization
- Few-shot example framework
- Evaluation metrics

## Configuration

```yaml
metadata:
  version: "0.1.0"
  description: "Minimal viable context for general purpose LLM interactions"
  token_budget: 800

system:
  role: "assistant"
  capabilities:
    - "answering questions"
    - "explaining concepts"
    - "helping with tasks"
  constraints:
    - "provide accurate information"
    - "acknowledge uncertainty"
    - "avoid unnecessary verbosity"

memory:
  enabled: true
  max_turns: 3
  pruning_strategy: "drop_oldest"
```

## Usage

```python
import yaml

# Load the template
with open('minimal_context.yaml', 'r') as f:
    context_template = yaml.safe_load(f)

# Customize for your use case
context_template['system']['role'] = "math tutor"
context_template['token_budget'] = 500

# Assemble context and use with LLM
prompt = assemble_context(context_template, user_query)
response = llm.generate(prompt)
```

## Features

- **Lightweight**: Minimal token overhead
- **Flexible**: Easy to customize and extend  
- **Memory-aware**: Handles conversation history
- **Budget-conscious**: Built-in token management
- **Evaluation-ready**: Includes quality metrics

## Template File

The complete template is available in `minimal_context.yaml`.
