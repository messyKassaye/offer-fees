import { IOfferFees } from "./IOfferFees";

export function calculateBuyerFees(fees:IOfferFees):number {
    return fees.buyerFeeFixed
}

export function calculateSellerFees(fees:IOfferFees) :number{
    return fees.sellerInvoice
}

export function calculateFees(fees:IOfferFees):number {
    return fees.buyerFeeFixed
}