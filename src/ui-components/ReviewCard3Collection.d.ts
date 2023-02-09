/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ReviewCard3Props } from "./ReviewCard3";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewCard3CollectionOverridesProps = {
    ReviewCard3Collection?: PrimitiveOverrideProps<CollectionProps>;
    ReviewCard3?: ReviewCard3Props;
} & EscapeHatchProps;
export declare type ReviewCard3CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ReviewCard3Props;
} & {
    overrides?: ReviewCard3CollectionOverridesProps | undefined | null;
}>;
export default function ReviewCard3Collection(props: ReviewCard3CollectionProps): React.ReactElement;
