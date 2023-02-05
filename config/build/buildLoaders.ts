import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { IBuildOptions } from "./types/config";

export const buildLoaders = (options: IBuildOptions): RuleSetRule[] => {
  const {isDev} = options;
  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : "[hash:base64:8]",
          },
         },
      },
      "sass-loader",
    ]
  };

  const typescriptLoaders = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }


  return [
    typescriptLoaders,
    cssLoaders,
  ]
}