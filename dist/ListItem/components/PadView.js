import React, { useRef } from 'react';
import { View } from 'react-native';
export const PadView = ({ children, pad, Component, ...props }) => {
    const _root = useRef(null);
    const length = React.Children.count(children);
    const Container = Component || View;
    return (<Container {...props} ref={_root} testID="RNE__LISTITEM__padView">
      {React.Children.map(children, (child, index) => child && [
            child,
            index !== length - 1 && <View style={{ paddingLeft: pad }}/>,
        ])}
    </Container>);
};