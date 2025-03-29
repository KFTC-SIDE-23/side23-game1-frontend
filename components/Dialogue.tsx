import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import Signature from 'react-native-signature-canvas';

interface DialogueProps {
  text?: string;
  imageSource?: ImageSourcePropType;
  width?: number;
  height?: number;
  isLeft?: boolean;
  enableDrawing?: boolean;
}

const Dialogue: React.FC<DialogueProps> = ({
  text,
  imageSource,
  width = 250,
  height = 200,
  isLeft = true,
  enableDrawing = false,
}) => {
  const ref = useRef<any>();

  const handleOK = (signature: string) => {
    console.log('🖌️ 그림 base64:', signature);
    // 원하면 여기서 저장하거나 state로 넘길 수 있음
  };

  return (
    <View style={[styles.wrapper, isLeft ? styles.leftAlign : styles.rightAlign]}>
      <View style={[styles.bubbleContainer, { width, height }]}>
        {text && <Text style={styles.bubbleText}>{text}</Text>}
        {imageSource && <Image source={imageSource} style={styles.bubbleImage} />}
        {enableDrawing && (
          <View style={[styles.signatureContainer, { width: width - 20, height: height - 60 }]}>
            <Signature
              ref={ref}
              onOK={handleOK}
              autoClear={false}
              descriptionText="여기에 그림을 그리세요"
              clearText="지우기"
              confirmText="확인"
              imageType="image/png"
              webStyle={signatureWebStyle}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const signatureWebStyle = `
  .m-signature-pad {
    box-shadow: none;
    border: none;
    height: 100%;
  }
  .m-signature-pad--body {
    border: none;
    height: 100%;
  }
  canvas {
    height: 100% !important;
    width: 100% !important;
  }
  .m-signature-pad--footer {
    display: none;
  }
  html, body {
    margin: 0; padding: 0;
    height: 100%;
    width: 100%;
  }
`;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
  },
  leftAlign: {
    alignSelf: 'flex-start',
  },
  rightAlign: {
    alignSelf: 'flex-end',
  },
  bubbleContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    maxWidth: 300,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    position: 'relative',
    overflow: 'hidden',
  },
  bubbleText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  bubbleImage: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  signatureContainer: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
});

export default Dialogue;
