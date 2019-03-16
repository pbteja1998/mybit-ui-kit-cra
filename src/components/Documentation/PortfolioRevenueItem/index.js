import React from 'react';
import { Showcase, EditPageLink, InstallationSection, PropsTable } from '../../Common/';
import PortfolioRevenueItem from '@pbteja-dev/ui.kit.portfolio-revenue-item';
import { Helmet } from "react-helmet";

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/PortfolioRevenueItem/index.js"

const PortfolioRevenueItemPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>PortfolioRevenueItem <EditPageLink editLink={EDIT_PAGE} /></h1>
    <p>A building block for TotalPortfolioRevenue on MyBit Go</p>

    <InstallationSection url={props.url} />

    <h1>Examples</h1>
    <Showcase data={revenueExample} />

    <h1>Props</h1>
    <PropsTable data={revenueProps} />
</div>
)

export default PortfolioRevenueItemPage

//example data
const revenueExample = {
    component: (
        <div>
            <div>
                <PortfolioRevenueItem
                    assetID={"asset-title-revenue"}
                    name={"Asset Title"}
                    totalRevenue={1392.54}
                    monthlyRevenue={96.68}
                />
            </div>
        </div>
    ),
    description: (
        <p>desc</p>
    ),
    code: `<PortfolioRevenueItem
    assetID={"asset-title-revenue"}
    name={"Asset Title"}
    totalRevenue={1392.54}
    monthlyRevenue={96.68}
/>`,
    display: 'inline-block'
}

//props data
const revenueProps = [{
    key: '1',
    property: 'assetID',
    description: `the id of the asset`,
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '2',
    property: 'name',
    description: `the name of the asset`,
    type: 'string',
    required: 'true',
    default: '-'
},{
    key: '3',
    property: 'monthlyRevenue',
    description: `the revenue generated by the asset for the month`,
    type: 'number',
    required: 'true',
    default: '-'
},{
    key: '4',
    property: 'totalRevenue',
    description: `the total revenue generated by the asset`,
    type: 'number',
    required: 'true',
    default: '-'
}];