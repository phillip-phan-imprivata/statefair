const contentTarget = document.querySelector(".entry")
const customerTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

export const TicketBooth = () => {
    customerTarget.innerHTML = `Total tickets purchased: ${customerCounter}`
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket" class="button">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="foodTicket" class="button">Food Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="gameTicket" class="button">Game Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="sideshowTicket" class="button">Sideshow Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="fullPackageTicket" class="button">Full Package Ticket</button>
        </div>
    `
}

let customerCounter = 0

eventHub.addEventListener("click", e => {
    if (e.target.id === "fullPackageTicket"){
        customerCounter += 4
        TicketBooth()
    }else if (e.target.className === "button"){
        customerCounter++
        TicketBooth()
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "rideTicket"){
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "foodTicket"){
        const rideEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "gameTicket"){
        const rideEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "sideshowTicket"){
        const rideEvent = new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "fullPackageTicket"){
        const rideEvent = new CustomEvent("fullPackageTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})
