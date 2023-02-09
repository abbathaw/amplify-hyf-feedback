/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CommentCardProps } from "./CommentCard";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewCard2OverridesProps = {
    ReviewCard2?: PrimitiveOverrideProps<FlexProps>;
    ReviewCard236482689?: CommentCardProps;
} & EscapeHatchProps;
export declare type ReviewCard2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ReviewCard2OverridesProps | undefined | null;
}>;
export default function ReviewCard2(props: ReviewCard2Props): React.ReactElement;
