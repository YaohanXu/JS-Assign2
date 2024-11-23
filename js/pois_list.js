function initPoisList(rightEl, pois, events) {
  const poiSearchEl = rightEl.querySelector('.search-section');
  const poisListEl = rightEl.querySelector('#poi-list');

  //
  // Create the pois list with selected type...
  //

  // Create the list items
  const poisListItems = {};

  function initListItems() {
    for (const poi of pois) {
      const poiType = poi.properties['Type'];
      const poiName = poi.properties['Name'];
      const poiSubcategory = poi.properties['Subcategory'];
      const poiTime = poi.properties['Time'];
      const item = document.createElement('li');

      item.innerHTML = `
        <button class="poi" data-type="${ poiType }" data-name="${ poiName }" data-subcategory="${ poiSubcategory }" data-time="${ poiTime }" aria-pressed="false">
          <span class="poi-name">${ poiName }</span>
          <span class="poi-subcategory">${ poiSubcategory }</span>
          <span class="poi-time">${ poiTime }mins</span>
        </button>
      `;
      poisListItems[poiName] = item;
    }
  }
  initListItems();

  // Populate the list of pois
  function populateList(pois) {
    poisListEl.innerHTML = '';

    pois = pois.sort((a, b) => {
      return a.properties['Name'].localeCompare(
        b.properties['Name'],
      );
    });

    for (const poi of pois) {
      const poiName = poi.properties['Name'];
      const item = poisListItems[poiName];
      poisListEl.append(item);
    }
  }
  populateList(pois);
}

export { initPoisList };
