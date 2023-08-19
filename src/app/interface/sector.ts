export interface Sector {
  title: string
  field_sector: string
  field_sector_details_: string
  field_sectors_image: string
  field_sector_name: string
  view: Opportunity []
}
export interface Opportunity  {
  title: string
  field_governorate: string
  field_opportunities_details: string
  field_opportunities_image: string
  field_opportunity_cost_as_string: number
  field_opportunity_name: string
  field_sector: string
  field_detail_file:any
  field_opportunities_employment:any
  field_number_of_opportunities:any

}
