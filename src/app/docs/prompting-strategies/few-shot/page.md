---
title: Few-Shot Learning - Teaching AI by Example
---

# Few-Shot Learning - Teaching AI by Example

Few-shot learning is one of the most powerful and practical prompting strategies. Instead of just telling AI what to do, you show it exactly what you want by providing 2-5 examples.

## What is Few-Shot Learning?

Few-shot learning works like showing someone examples before asking them to do a task. The AI recognizes the pattern in your examples and applies it to new inputs.

```
Example 1: Input → Output
Example 2: Input → Output  
Example 3: Input → Output
─────────────────────────
Your Input → ?
```

The AI learns from the pattern and generates output that matches your examples.

## Why Few-Shot is So Powerful

### **Dramatic Quality Improvements**
- **10-30% better accuracy** on most tasks
- **Much more consistent** output format and style
- **Better edge case handling** when you include diverse examples
- **Follows your specific requirements** instead of general patterns

### **The Training Effect**
When you provide examples, you're essentially giving the AI a mini-training session tailored to your exact needs.

## When to Use Few-Shot Learning

### ✅ **Perfect For:**
- **Tasks requiring specific style or format**
- **Complex outputs** with multiple components
- **Domain-specific work** where you have good examples
- **Consistency across multiple similar tasks**
- **When zero-shot results are "close but not quite right"**

### ❌ **Skip When:**
- **Very simple, standard tasks** (zero-shot is often enough)
- **You don't have good examples** to show
- **Exploring creative possibilities** (examples might limit creativity)
- **Token budget is extremely tight**

## The Anatomy of Few-Shot Prompts

### **Basic Structure:**
```
[INSTRUCTION]

[EXAMPLE 1]
[EXAMPLE 2]
[EXAMPLE 3]

[YOUR NEW INPUT]
```

### **Professional Structure:**
```
[ROLE/CONTEXT]
[TASK DESCRIPTION]

Examples:
Input: [Example 1 Input]
Output: [Example 1 Output]

Input: [Example 2 Input]
Output: [Example 2 Output]

Input: [Example 3 Input]
Output: [Example 3 Output]

Input: [Your Actual Input]
Output:
```

## Real-World Few-Shot Examples

### Content Creation: Email Responses

```
Write professional email responses to customer inquiries.

Examples:

Input: "Is your software compatible with Mac?"
Output: "Thanks for your question! Yes, our software is fully compatible with Mac systems running macOS 10.14 or later. You can download it directly from our website. If you need any help with installation, our support team is here to assist. Best regards, [Name]"

Input: "How do I cancel my subscription?"
Output: "I'd be happy to help you with your subscription. You can cancel anytime from your account settings under 'Billing.' If you'd prefer, I can process the cancellation for you right now. Just let me know, and I'll take care of it immediately. Best regards, [Name]"

Input: "Your app keeps crashing on my phone."
Output: "I'm sorry you're experiencing crashes with our app. Let's get this fixed right away. Please try updating to the latest version first. If that doesn't work, I'll connect you with our technical team who can provide personalized troubleshooting. We'll make sure this gets resolved today. Best regards, [Name]"

Input: "Do you offer student discounts?"
Output:
```

### Data Analysis: Social Media Metrics

```
Analyze social media performance data and provide actionable insights.

Examples:

Input: "Instagram: 10K followers, 2% engagement rate, 50 posts this month"
Output: "📊 Performance: Below average engagement (industry avg: 3-4%). Recommendation: Focus on higher-quality content over quantity. Try posting 15-20 posts next month with more interactive elements like polls and questions to boost engagement."

Input: "LinkedIn: 5K followers, 8% engagement rate, 20 posts this month"
Output: "📊 Performance: Excellent engagement rate (industry avg: 2-3%). Recommendation: Your content resonates well with your audience. Maintain this posting frequency and consider expanding reach through employee advocacy and thought leadership content."

Input: "TikTok: 50K followers, 12% engagement rate, 60 posts this month"
Output: "📊 Performance: Strong engagement for the platform (industry avg: 9-10%). Recommendation: Your posting frequency is driving good results. Consider creating content series or trending challenges to maintain momentum and potentially viral growth."

Input: "Twitter: 2K followers, 1% engagement rate, 100 posts this month"
Output:
```

### Creative Writing: Product Descriptions

```
Write engaging product descriptions for an outdoor gear store.

Examples:

Input: "Waterproof hiking boots, size 8-12, $180"
Output: "Conquer any trail with confidence. These premium waterproof hiking boots feature advanced moisture protection and rugged sole grip that won't let you down when the path gets challenging. Whether you're facing mountain streams or muddy trails, your feet stay dry and comfortable mile after mile. Available in sizes 8-12. $180"

Input: "Camping tent, sleeps 4, lightweight, $250"  
Output: "Your basecamp for adventure awaits. This lightweight 4-person tent sets up in minutes and packs down small, perfect for backpacking or car camping. Weather-tested design keeps you dry and comfortable while weighing just 6 pounds. Turn any wilderness into home for the night. Sleeps 4 comfortably. $250"

Input: "Sleeping bag, -10°F rating, compact, $120"
Output:
```

## The Science of Example Selection

### **1. Diversity Principle**
Cover different scenarios your AI might encounter:

```
✅ Good Variety:
- Simple case
- Complex case  
- Edge case

❌ Poor Variety:
- Three very similar examples
```

### **2. Quality Over Quantity**
2-3 excellent examples beat 5 mediocre ones:

```
✅ High Quality:
- Clear input-output relationship
- Perfect examples of desired style
- Covers key use cases

❌ Low Quality:
- Inconsistent format
- Poor examples of what you want
- Confusing or ambiguous
```

### **3. Order Matters**
Structure examples strategically:

```
✅ Good Order:
1. Simple, clear example
2. More complex example
3. Edge case or special situation

❌ Poor Order:
1. Complex edge case first
2. Random ordering
3. Inconsistent complexity
```

## Advanced Few-Shot Techniques

### **Chain-of-Thought Few-Shot**
Show the thinking process, not just the result:

```
Solve math word problems step by step.

Example:
Input: "Sarah has 24 apples. She gives away 1/3 to friends and eats 2 herself. How many apples does she have left?"

Output: 
"Let me work through this step by step:
1. Sarah starts with 24 apples
2. She gives away 1/3: 24 ÷ 3 = 8 apples given away
3. She eats 2 apples herself  
4. Total used: 8 + 2 = 10 apples
5. Remaining: 24 - 10 = 14 apples
Answer: Sarah has 14 apples left."

Input: "Mike buys 3 packs of gum. Each pack has 12 pieces and costs $1.50. He pays with a $10 bill. How much change does he get?"

Output:
```

### **Format-Constrained Few-Shot**
When you need very specific output formats:

```
Convert customer feedback into structured data.

Examples:

Input: "The delivery was super fast but the packaging was damaged when it arrived. Product quality is good though."
Output: {
  "delivery_speed": "excellent",
  "packaging_quality": "poor", 
  "product_quality": "good",
  "overall_sentiment": "mixed"
}

Input: "Amazing product! Fast shipping and perfect condition. Will definitely order again."
Output: {
  "delivery_speed": "excellent",
  "packaging_quality": "excellent",
  "product_quality": "excellent", 
  "overall_sentiment": "positive"
}

Input: "Product broke after 2 days. Took forever to get here and customer service was unhelpful."
Output:
```

## Common Few-Shot Mistakes

### **Mistake 1: Inconsistent Examples**
❌ **Bad:**
```
Example 1: Professional email tone
Example 2: Casual text message tone  
Example 3: Formal business letter tone
```

✅ **Good:**
```
Example 1: Professional but friendly email
Example 2: Professional but friendly email
Example 3: Professional but friendly email
```

### **Mistake 2: Too Many Examples**
❌ **Bad:** 8 examples that overwhelm the context
✅ **Good:** 3 carefully chosen examples that show the pattern clearly

### **Mistake 3: Examples Don't Match Use Case**
❌ **Bad:** Examples for simple tasks when you need complex outputs
✅ **Good:** Examples that match the complexity of your actual task

### **Mistake 4: Poor Input Variety**
❌ **Bad:** All examples handle the same type of scenario
✅ **Good:** Examples show how to handle different situations

## Building Your Few-Shot Library

### **1. Start a Collection**
Keep a document with your best examples for common tasks:
- Customer communication
- Content creation
- Data analysis  
- Creative work

### **2. Test and Iterate**
- Try different example combinations
- Note which examples produce better results
- Refine examples based on output quality

### **3. Create Templates**
Build reusable few-shot templates for recurring work:

```
[Task Description]

Examples:
Input: [Template Input 1]
Output: [Template Output 1]

Input: [Template Input 2] 
Output: [Template Output 2]

Input: [Template Input 3]
Output: [Template Output 3]

Input: [Your Actual Input]
Output:
```

## Measuring Few-Shot Success

### **Quality Metrics:**
- **Consistency** - Do you get similar quality across multiple uses?
- **Accuracy** - Does output match your expectations?
- **Format adherence** - Does it follow the pattern you showed?
- **Style matching** - Does it capture the tone and approach you want?

### **Efficiency Metrics:**
- **Time saved** - Less revision needed vs zero-shot
- **Token usage** - Cost vs benefit of longer prompts
- **Reusability** - Can you use the same prompt template repeatedly?

## Few-Shot Templates for Common Tasks

### **Business Communication**
```
[Context and tone instruction]

Examples:
Input: [Communication scenario 1]
Output: [Professional response 1]

Input: [Communication scenario 2] 
Output: [Professional response 2]

Input: [Your actual scenario]
Output:
```

### **Content Analysis**
```
[Analysis instructions and criteria]

Examples:
Input: [Content sample 1]
Output: [Analysis result 1]

Input: [Content sample 2]
Output: [Analysis result 2]

Input: [Your content to analyze]
Output:
```

### **Creative Generation**
```
[Creative direction and requirements]

Examples:
Input: [Creative brief 1]
Output: [Creative output 1]

Input: [Creative brief 2]
Output: [Creative output 2]

Input: [Your creative brief]
Output:
```

## When to Upgrade from Few-Shot

Consider more advanced strategies when:
- **You need complex reasoning** (try chain-of-thought)
- **Tasks require multiple steps** (try step-by-step prompting)
- **You want more consistency** (try template-based approaches)
- **Working with specialized domains** (try role-based + few-shot)

## Next Steps

1. **Choose one recurring task** you do with AI
2. **Collect 3 high-quality examples** of the input and desired output
3. **Create a few-shot prompt** using the templates above
4. **Test it** on new inputs and compare to your previous results
5. **Refine the examples** based on what you learn

Remember: Few-shot learning is often the sweet spot between effort and results. Master this strategy and you'll dramatically improve your AI interactions.

---

## Related Strategies

- [Zero-Shot Prompting →](/docs/prompting-strategies/zero-shot) - When examples aren't needed
- [Chain-of-Thought →](/docs/prompting-strategies/chain-of-thought) - Add reasoning to examples
- [Template Strategies →](/docs/prompting-strategies/templates) - Structure for complex workflows
- [Back to All Strategies →](/docs/prompting-strategies)