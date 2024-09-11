
import re

from markdown.extensions import Extension
from markdown.postprocessors import Postprocessor


class CustomCommentsPostprocessor(Postprocessor):
    def run(self, text):
        # 正则表达式匹配自定义注释语法
        pattern = re.compile(r'<!--\s*custom:(\w+)\s*-->')

        # 替换自定义注释为 HTML
        def replace(match):
            keyword = match.group(1)
            # 根据关键字返回自定义 HTML 内容
            if keyword == 'icon':
                return '<i class="custom-icon"></i>'
            return match.group(0)

        return pattern.sub(replace, text)


class CustomCommentsExtension(Extension):
    def extendMarkdown(self, md):
        md.postprocessors.register(CustomCommentsPostprocessor(md), 'custom_comments', 175)


def makeExtension(**kwargs):
    return CustomCommentsExtension(**kwargs)
