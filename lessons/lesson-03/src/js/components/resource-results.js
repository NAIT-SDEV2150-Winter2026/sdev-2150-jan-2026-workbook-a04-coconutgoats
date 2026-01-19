const template = document.createElement('template');
// TODO: Update the template to support dynamic results (NOTE: we are not altering the badge count at this time) FINISHED
template.innerHTML = `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
  <section class="h-100">
    <div class="card h-100">
      <div class="card-header d-flex justify-content-between align-items-center">
        <strong>Results</strong>
        <span class="badge text-bg-secondary">4</span>
      </div>

      <div class="list-group list-group-flush">
        <!-- Buttons go here -->
      </div>
    </div>
  </section>`;

class ResourceResults extends HTMLElement {
  // TODO: Create a private field for results data FINISHED
  #results = [];
  constructor() {
    super();
    // TODO: Bind the handleResultClick method to this instance

    this.attachShadow({ mode: 'open' });
  }

  // TODO: Implement setter for results data, remember to render FINISHED
  set results(data) { // cant modify private field directly from outside so we use setter
    this.#results = data;
    this.render();
  }

  // TODO: Add an event handler method for result selection FINISHED
  _handleResultClick(event) {
    const clickedElement = event.target.closest('button[data-id]'); // select closest button
    if (clickedElement) { // did we find anything?
      const selectedId = clickedElement.getAttribute('data-id'); // ok now select the data-id from the selected button
      // search the results for the data that matches the selectedId (data-id attribute)
      const resource = this.#results.find(r => r.id === selectedId); // find the resource that matches the selectedId (data-id attribute)

      const selectedEvent = new CustomEvent('resource-selected', {
        detail: { resource },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(selectedEvent);
    }
  }

  connectedCallback() {
    // TODO: Add a click event listener to handle result selection

    this.render();
  }

  // TODO: Clean up event listener in disconnectedCallback

  render() {
    // TODO: Update to render from the private results field, if it's empty, show "No results found" message FINISHED
    const node = template.content.cloneNode(true);
    const listGroup = node.querySelector('.list-group');
    if (!this.#results || this.#results.length === 0) { // if there are no results
      ;
    } else {
      for (const result of this.#results) {
        const listGroupContent = `
        <button data-id="${result.id}" type="button" class="list-group-item list-group-item-action" aria-current="true">
          <div class="d-flex w-100 justify-content-between">
            <h2 class="h6 mb-1">${result.title}</h2>
            <small>${result.category}</small>
          </div>
          <p class="mb-1 small text-body-secondary">${result.summary}</p>
          <small class="text-body-secondary">${result.location}</small>
        </button>`;

        listGroup.innerHTML += listGroupContent; // add to existing content
      }
    }

    this.shadowRoot.innerHTML = ''; // remove the existing to be able to replace
    this.shadowRoot.appendChild(node);
  }
}

customElements.define('resource-results', ResourceResults);

// notes
// removed hard coded buttons from the template. will add them dynamically with loop with different data
