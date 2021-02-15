const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="foodTicket">Food Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="gameTicket">Game Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

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
