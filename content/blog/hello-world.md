---
title: Hello World
description: My first proper blog post on my first proper personal website.
date: git Last Modified
tags:
  - lit
  - chatgpt
footnotes:
  - '<a href="https://sharegpt.com/c/w4jtuY4" target="_blank">The full transcript in all its headache inducing glory</a>'
---

So, I was thinking about what I could write as my first blog post, and it hit me.
Get ChatGPT to write a component in lit, and then point and laugh at it.

So, let's do just that:

## The Experiment
{% gptQuestion %}
Write a Lit component in Typescript that counts how many times it has been clicked and displays that.
{% endgptQuestion %}
{% gptAnswer %}
{% renderTemplate "md" %}
```ts
import React, { useState } from 'react'

interface Props {}

const ClickCounter: React.FC<Props> = () => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      This button has been clicked {count} times
    </button>
  )
}

export default ClickCounter
```
This is a basic example of a functional React component written in TypeScript. It uses the `useState` hook to keep track of the number of times the button has been clicked,
and updates the count displayed on the button every time it is clicked.
{% endrenderTemplate %}
{% endgptAnswer %}

So...... first things first. It spit out a `react` component when I asked for a `lit` component.
Now, to be fair, I'm 90% positive that react component would do the thing I asked for the component to do.
Just, in react. Which sort of belies the entire weakness of ChatGPT.

{% gptQuestion %}
I asked you to write a component in Lit
{% endgptQuestion %}
{% gptAnswer %}
{% renderTemplate "md" %}
I apologize for the confusion, here's an example of a Lit component written in TypeScript that counts how many times it has been clicked and displays that:
```ts
import { LitElement, html, customElement, property } from 'lit-element'

@customElement('click-counter')
class ClickCounter extends LitElement {
  @property({ type: Number }) count = 0

  render() {
    return html`
      <button @click=${() => this.count++}>
        This button has been clicked ${this.count} times
      </button>
    `
  }
}
```
This component uses the `@customElement` decorator to define the name of the custom element and the `@property` decorator to define a property for the count.
The `render` method uses a template literal to create the button element and binds an event listener to the `click` event. The listener increments the count property each time the button is clicked.
{% endrenderTemplate %}
{% endgptAnswer %}

After I corrected it, the next batch of code it spit out is, I believe, the only example (and there were more after the three I documented here)
that would actually run "correctly", but there are still quite a number of issues here.

1. `lit-element` has been deprecated since 2021 (as it admitted to me after I corrected it after the third example here), and will yell at you in the browser for importing from it.
2. It specified the `count` as a `@property`. Now, depending on your mood this could be perfectly fine. You could want to expose the `count` prop to the consuming application to allow
it to be set from the outside and then incremented internally as normal. Heck, it even caught that it needed to give `lit` the type hint so that it would be parsed correctly across the
web-component boundary. However, this is not what I was after (and also isn't functionally identical to the react component)

So, I offered more guidance towards my desired end goal.

{% gptQuestion %}
Why are you allowing `count` to be passed in from the outside? It is entirely internal to the component, wouldn't it be better to use `@state` instead?
{% endgptQuestion %}
{% gptAnswer %}
{% renderTemplate "md" %}
You are correct, the `count` property should be internal state of the component and should not be passed in from the outside. In this case, it would be better to use the `@state` decorator instead of
the `@property` decorator to define the `count` variable. The @state decorator will automatically handle the re-rendering and updating of the component when the state changes.

Here's an example of the component with the `count` variable defined as a state:
```ts
import { LitElement, html, customElement, state } from 'lit-element'

@customElement('click-counter')
class ClickCounter extends LitElement {
  @state count = 0

  render() {
    return html`
      <button @click=${() => this.count++}>
        This button has been clicked ${this.count} times
      </button>
    `
  }
}
```
{% endrenderTemplate %}
{% endgptAnswer %}

I corrected it again, and questioned whether or not `count` needed to be externally settable. Being the agreeable machine that it is, it acquiesed to my code review and produced a second
version in lit that used the `@state` decorator for `count` to produce an internal reactive state instead of an external one. The problem here though (aside from it still using `lit-element`)
is that it did not put the function call parens after the state decorator, rendering the Typescript invalid.

After this, I informed it that `lit-element` had been deprecated, and it cobbled together a nearly vanilla JS web-component using `html` and `render` from `lit-html` to handle the rendering,
but it entirely lost the reactive re-rendering that `lit` gives you for free. When I then pointed out that it could just be using the `lit` npm package and not have to mess with vanilla JS
web-components, it spit out the last variant before I gave up.

{% gptAnswer %}
{% renderTemplate "md" %}
```js
import { Component, html } from 'lit'

class ClickCounter extends Component {
  constructor() {
    super()
    this.count = 0
  }

  render() {
    return html`
      <button @click=${() => this.count++}>
        This button has been clicked ${this.count} times
      </button>
    `
  }
}

customElements.define('click-counter', ClickCounter)
```
{% endrenderTemplate %}
{% endgptAnswer %}

Here, it imports the non-existant `Component` class from `lit`, extends it, and entirely forgets about the decorators for `state` and `customElement`. These are easily imported from
`'lit/decorators.js'`. Because `this.count` is no longer decorated by `@state` or `@property`, it is not reactive, so updating it in the click handler will not trigger a re-render.
And again, `Component` is not a thing that has ever been exported from any `lit-*` package, so this code wouldn't actually compile in the first place.

## The TL;DR;
I think, for right now at least, Front End devs are safe from ChatGPT. It clearly almost kind of understands what you're asking it, sometimes, but the code it spits back looks
like a Freshman in Software Dev 101 got the task, asked google, and just copied and pasted in the first hit it got that looked almost correct. The more I tried to correct or steer
ChatGPT into giving the output I truly desired, the more confused it became. Is this probably partially my fault for being terrible at prompt engineering? Almost certainly yes. However,
that just exposes another weakness. If ChatGPT will truly consume dev jobs in the future, we'll still be fine, since we'll just be "developing" in ChatGPT, gently massaging prompts to get
it to spit out what we want in a shape we desire.

But the longer you think about it, the more you realize that if the person engineering the ChatGPT prompt to get correctly shaped output is already required to know what that correctly shaped
output should look like to begin with, what even is the point of paying the person to spend hours/days/weeks engineering a prompt to get the computer to spit out the code, when they could likely
write it themselves considerably faster, and with actual understanding of what they're doing?
