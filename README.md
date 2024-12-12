# ColorCodeJS
Ensure easy manipulation of ColorCode
ver:0.0.1
colorコードの類似性とか調べられるやつです。

# 機能一覧
## ColorCodeクラス
ColorCode.Rawcolor 処理用のやつ
### RGB
ColorCode.red colorコードの赤成分

ColorCode.green colorコードの緑成分

ColorCode.blue colorコードの青成分
### HSB
ColorCode.Hue colorコードの色相

ColorCode.Saturation colorコードの彩度

ColorCode.Brightness colorコードの明度
### similarity
ColorCode.similarity("ColorCode") カラーコード2つをコサイン類似度で比較する
### AlphaBlending
ColorCode.AlphaBlending("ColorCode(RGBA)") 透明度のあるカラーcodeを上から重ねた時の色を取得 
