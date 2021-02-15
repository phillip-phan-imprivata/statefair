const contentTarget = document.getElementsByClassName("people")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
  eventHub.addEventListener("fullPackageTicketPurchased", e => {
    for (const content of contentTarget){
      content.innerHTML += `
      <div class="person bigSpender"></div>
    `
    }
  })
}