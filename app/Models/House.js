export default class House {
    constructor({ price, bedrooms, bathrooms, levels, year, description, imgUrl, id}) {
      // NOTE it is no longer our job to generate Id's
      this.id = id
      this.bedrooms = bedrooms
      this.bathrooms = bathrooms
      this.levels = levels
      this.year = year
      this.price = price
      this.description = description
      this.imgUrl = imgUrl
  
    }
  
    get Template() {
      return `
      <div class="col-md-4 mb-3">
        <div class="card shadow">
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h5 class="card-title">${this.bedrooms} Beds | ${this.bathrooms} Baths | Levels: ${this.levels} | Year Built: ${this.year}</h5>
                <p class="card-text">${this.description} - $${this.price.toFixed(2)}</p>
            </div>
            <div class="px-3 pb-3 d-flex justify-content-between">
                <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
                <button type="button" class="btn btn-info" onclick="app.housesController.bid('${this.id}')">Bid</button>
            </div>
        </div>
      </div>
      `
    }
  }