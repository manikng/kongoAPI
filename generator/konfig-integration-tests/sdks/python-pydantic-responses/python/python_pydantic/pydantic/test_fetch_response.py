# coding: utf-8

"""
    Python Pydantic Responses API

    A simple API based on python pydantic responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel, ConfigDict


class TestFetchResponse(BaseModel):
    # Description of property A.
    property_a: typing.Optional[str] = Field(None, alias='propertyA')

    # Description of property B.
    property_b: typing.Optional[int] = Field(None, alias='propertyB')

    # Description of property C.
    property_c: typing.Optional[bool] = Field(None, alias='propertyC')

    model_config = ConfigDict(
        protected_namespaces=(),
        arbitrary_types_allowed=True
    )
