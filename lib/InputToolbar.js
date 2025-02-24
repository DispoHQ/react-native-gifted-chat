import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Composer } from './Composer';
import { Send } from './Send';
import { Actions } from './Actions';
import Color from './Color';
import { StylePropType } from './utils';
const styles = StyleSheet.create({
    container: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: Color.defaultColor,
        backgroundColor: Color.white,
        bottom: 0,
        left: 0,
        right: 0,
    },
    primary: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    accessory: {
        height: 44,
    },
});
export function InputToolbar(props) {
    const { containerStyle, ...rest } = props;
    const { renderActions, onPressActionButton, renderComposer, renderSend, renderAccessory, } = rest;
    return (<View style={[styles.container, containerStyle]}>
      <View style={[styles.primary, props.primaryStyle]}>
        {(renderActions === null || renderActions === void 0 ? void 0 : renderActions(rest)) ||
            (onPressActionButton && <Actions {...rest}/>)}
        {(renderComposer === null || renderComposer === void 0 ? void 0 : renderComposer(props)) || <Composer {...props}/>}
        {(renderSend === null || renderSend === void 0 ? void 0 : renderSend(props)) || <Send {...props}/>}
      </View>
      {renderAccessory && (<View style={[styles.accessory, props.accessoryStyle]}>
          {renderAccessory(props)}
        </View>)}
    </View>);
}
InputToolbar.propTypes = {
    renderAccessory: PropTypes.func,
    renderActions: PropTypes.func,
    renderSend: PropTypes.func,
    renderComposer: PropTypes.func,
    onPressActionButton: PropTypes.func,
    containerStyle: StylePropType,
    primaryStyle: StylePropType,
    accessoryStyle: StylePropType,
};
//# sourceMappingURL=InputToolbar.js.map