# coding: utf-8

"""
    python-pydantic-recursively-convert-to-models API

    A simple API based for testing python-pydantic-recursively-convert-to-models.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from python_pydantic_recursively_convert_to_models.paths.object.get import FetchRaw
from python_pydantic_recursively_convert_to_models.paths._list.get import ListRaw


class TestApiRaw(
    FetchRaw,
    ListRaw,
):
    """NOTE:
    This class is auto generated by Konfig (https://konfigthis.com)
    """
    pass