/*
 * SnapTrade
 * Connect brokerage accounts to your app for live positions and trading
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@snaptrade.com
 *
 * NOTE: This class is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */


package com.konfigthis.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.konfigthis.client.model.BrokerageSymbol;
import com.konfigthis.client.model.Trade;
import com.konfigthis.client.model.UniversalSymbol;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import org.apache.commons.lang3.StringUtils;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.konfigthis.client.JSON;

/**
 * Execution status of a trade
 */
@ApiModel(description = "Execution status of a trade")@javax.annotation.Generated(value = "Generated by https://konfigthis.com")
public class TradeExecutionStatus {
  public static final String SERIALIZED_NAME_SYMBOL = "symbol";
  @SerializedName(SERIALIZED_NAME_SYMBOL)
  private BrokerageSymbol symbol;

  public static final String SERIALIZED_NAME_UNIVERSAL_SYMBOL = "universal_symbol";
  @SerializedName(SERIALIZED_NAME_UNIVERSAL_SYMBOL)
  private UniversalSymbol universalSymbol;

  public static final String SERIALIZED_NAME_TRADE = "trade";
  @SerializedName(SERIALIZED_NAME_TRADE)
  private Trade trade;

  /**
   * Execution state of a trade
   */
  @JsonAdapter(StateEnum.Adapter.class)
 public enum StateEnum {
    EXECUTED("Executed"),
    
    CANCELED("Canceled"),
    
    REJECTED("Rejected"),
    
    FAILED("Failed"),
    
    NOT_EXECUTED("Not Executed");

    private String value;

    StateEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static StateEnum fromValue(String value) {
      for (StateEnum b : StateEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<StateEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final StateEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public StateEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return StateEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_STATE = "state";
  @SerializedName(SERIALIZED_NAME_STATE)
  private StateEnum state;

  public static final String SERIALIZED_NAME_FILLED_UNITS = "filled_units";
  @SerializedName(SERIALIZED_NAME_FILLED_UNITS)
  private Integer filledUnits;

  /**
   * Action of executed trade
   */
  @JsonAdapter(ActionEnum.Adapter.class)
 public enum ActionEnum {
    BUY("BUY"),
    
    SELL("SELL");

    private String value;

    ActionEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static ActionEnum fromValue(String value) {
      for (ActionEnum b : ActionEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<ActionEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ActionEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public ActionEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return ActionEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_ACTION = "action";
  @SerializedName(SERIALIZED_NAME_ACTION)
  private ActionEnum action;

  public static final String SERIALIZED_NAME_PRICE = "price";
  @SerializedName(SERIALIZED_NAME_PRICE)
  private Double price;

  public static final String SERIALIZED_NAME_COMMISSIONS = "commissions";
  @SerializedName(SERIALIZED_NAME_COMMISSIONS)
  private Double commissions;

  public static final String SERIALIZED_NAME_META = "meta";
  @SerializedName(SERIALIZED_NAME_META)
  private Map<String, Object> meta = null;

  public TradeExecutionStatus() {
  }

  public TradeExecutionStatus symbol(BrokerageSymbol symbol) {
    
    
    
    
    this.symbol = symbol;
    return this;
  }

   /**
   * Get symbol
   * @return symbol
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public BrokerageSymbol getSymbol() {
    return symbol;
  }


  public void setSymbol(BrokerageSymbol symbol) {
    
    
    
    this.symbol = symbol;
  }


  public TradeExecutionStatus universalSymbol(UniversalSymbol universalSymbol) {
    
    
    
    
    this.universalSymbol = universalSymbol;
    return this;
  }

   /**
   * Get universalSymbol
   * @return universalSymbol
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public UniversalSymbol getUniversalSymbol() {
    return universalSymbol;
  }


  public void setUniversalSymbol(UniversalSymbol universalSymbol) {
    
    
    
    this.universalSymbol = universalSymbol;
  }


  public TradeExecutionStatus trade(Trade trade) {
    
    
    
    
    this.trade = trade;
    return this;
  }

   /**
   * Get trade
   * @return trade
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Trade getTrade() {
    return trade;
  }


  public void setTrade(Trade trade) {
    
    
    
    this.trade = trade;
  }


  public TradeExecutionStatus state(StateEnum state) {
    
    
    
    
    this.state = state;
    return this;
  }

   /**
   * Execution state of a trade
   * @return state
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "EXECUTED", value = "Execution state of a trade")

  public StateEnum getState() {
    return state;
  }


  public void setState(StateEnum state) {
    
    
    
    this.state = state;
  }


  public TradeExecutionStatus filledUnits(Integer filledUnits) {
    
    
    
    
    this.filledUnits = filledUnits;
    return this;
  }

   /**
   * Number of filled units
   * @return filledUnits
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "3", value = "Number of filled units")

  public Integer getFilledUnits() {
    return filledUnits;
  }


  public void setFilledUnits(Integer filledUnits) {
    
    
    
    this.filledUnits = filledUnits;
  }


  public TradeExecutionStatus action(ActionEnum action) {
    
    
    
    
    this.action = action;
    return this;
  }

   /**
   * Action of executed trade
   * @return action
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "SELL", value = "Action of executed trade")

  public ActionEnum getAction() {
    return action;
  }


  public void setAction(ActionEnum action) {
    
    
    
    this.action = action;
  }


  public TradeExecutionStatus price(Double price) {
    
    
    
    
    this.price = price;
    return this;
  }

  public TradeExecutionStatus price(Integer price) {
    
    
    
    
    this.price = price.doubleValue();
    return this;
  }

   /**
   * Price of execution
   * @return price
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "23.44", value = "Price of execution")

  public Double getPrice() {
    return price;
  }


  public void setPrice(Double price) {
    
    
    
    this.price = price;
  }


  public TradeExecutionStatus commissions(Double commissions) {
    
    
    
    
    this.commissions = commissions;
    return this;
  }

  public TradeExecutionStatus commissions(Integer commissions) {
    
    
    
    
    this.commissions = commissions.doubleValue();
    return this;
  }

   /**
   * Fees paid from executing trade
   * @return commissions
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "23.44", value = "Fees paid from executing trade")

  public Double getCommissions() {
    return commissions;
  }


  public void setCommissions(Double commissions) {
    
    
    
    this.commissions = commissions;
  }


  public TradeExecutionStatus meta(Map<String, Object> meta) {
    
    
    
    
    this.meta = meta;
    return this;
  }

  public TradeExecutionStatus putMetaItem(String key, Object metaItem) {
    if (this.meta == null) {
      this.meta = new HashMap<>();
    }
    this.meta.put(key, metaItem);
    return this;
  }

   /**
   * Other misc. data
   * @return meta
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "{\"canceledUnits\":2}", value = "Other misc. data")

  public Map<String, Object> getMeta() {
    return meta;
  }


  public void setMeta(Map<String, Object> meta) {
    
    
    
    this.meta = meta;
  }

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  private Map<String, Object> additionalProperties;

  /**
   * Set the additional (undeclared) property with the specified name and value.
   * If the property does not already exist, create it otherwise replace it.
   *
   * @param key name of the property
   * @param value value of the property
   * @return the TradeExecutionStatus instance itself
   */
  public TradeExecutionStatus putAdditionalProperty(String key, Object value) {
    if (this.additionalProperties == null) {
        this.additionalProperties = new HashMap<String, Object>();
    }
    this.additionalProperties.put(key, value);
    return this;
  }

  /**
   * Return the additional (undeclared) property.
   *
   * @return a map of objects
   */
  public Map<String, Object> getAdditionalProperties() {
    return additionalProperties;
  }

  /**
   * Return the additional (undeclared) property with the specified name.
   *
   * @param key name of the property
   * @return an object
   */
  public Object getAdditionalProperty(String key) {
    if (this.additionalProperties == null) {
        return null;
    }
    return this.additionalProperties.get(key);
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TradeExecutionStatus tradeExecutionStatus = (TradeExecutionStatus) o;
    return Objects.equals(this.symbol, tradeExecutionStatus.symbol) &&
        Objects.equals(this.universalSymbol, tradeExecutionStatus.universalSymbol) &&
        Objects.equals(this.trade, tradeExecutionStatus.trade) &&
        Objects.equals(this.state, tradeExecutionStatus.state) &&
        Objects.equals(this.filledUnits, tradeExecutionStatus.filledUnits) &&
        Objects.equals(this.action, tradeExecutionStatus.action) &&
        Objects.equals(this.price, tradeExecutionStatus.price) &&
        Objects.equals(this.commissions, tradeExecutionStatus.commissions) &&
        Objects.equals(this.meta, tradeExecutionStatus.meta)&&
        Objects.equals(this.additionalProperties, tradeExecutionStatus.additionalProperties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(symbol, universalSymbol, trade, state, filledUnits, action, price, commissions, meta, additionalProperties);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TradeExecutionStatus {\n");
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    universalSymbol: ").append(toIndentedString(universalSymbol)).append("\n");
    sb.append("    trade: ").append(toIndentedString(trade)).append("\n");
    sb.append("    state: ").append(toIndentedString(state)).append("\n");
    sb.append("    filledUnits: ").append(toIndentedString(filledUnits)).append("\n");
    sb.append("    action: ").append(toIndentedString(action)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    commissions: ").append(toIndentedString(commissions)).append("\n");
    sb.append("    meta: ").append(toIndentedString(meta)).append("\n");
    sb.append("    additionalProperties: ").append(toIndentedString(additionalProperties)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("symbol");
    openapiFields.add("universal_symbol");
    openapiFields.add("trade");
    openapiFields.add("state");
    openapiFields.add("filled_units");
    openapiFields.add("action");
    openapiFields.add("price");
    openapiFields.add("commissions");
    openapiFields.add("meta");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to TradeExecutionStatus
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!TradeExecutionStatus.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in TradeExecutionStatus is not found in the empty JSON string", TradeExecutionStatus.openapiRequiredFields.toString()));
        }
      }
      // validate the optional field `symbol`
      if (jsonObj.get("symbol") != null && !jsonObj.get("symbol").isJsonNull()) {
        BrokerageSymbol.validateJsonObject(jsonObj.getAsJsonObject("symbol"));
      }
      // validate the optional field `universal_symbol`
      if (jsonObj.get("universal_symbol") != null && !jsonObj.get("universal_symbol").isJsonNull()) {
        UniversalSymbol.validateJsonObject(jsonObj.getAsJsonObject("universal_symbol"));
      }
      // validate the optional field `trade`
      if (jsonObj.get("trade") != null && !jsonObj.get("trade").isJsonNull()) {
        Trade.validateJsonObject(jsonObj.getAsJsonObject("trade"));
      }
      if ((jsonObj.get("state") != null && !jsonObj.get("state").isJsonNull()) && !jsonObj.get("state").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `state` to be a primitive type in the JSON string but got `%s`", jsonObj.get("state").toString()));
      }
      if ((jsonObj.get("action") != null && !jsonObj.get("action").isJsonNull()) && !jsonObj.get("action").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `action` to be a primitive type in the JSON string but got `%s`", jsonObj.get("action").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!TradeExecutionStatus.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'TradeExecutionStatus' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<TradeExecutionStatus> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(TradeExecutionStatus.class));

       return (TypeAdapter<T>) new TypeAdapter<TradeExecutionStatus>() {
           @Override
           public void write(JsonWriter out, TradeExecutionStatus value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             obj.remove("additionalProperties");
             // serialize additonal properties
             if (value.getAdditionalProperties() != null) {
               for (Map.Entry<String, Object> entry : value.getAdditionalProperties().entrySet()) {
                 if (entry.getValue() instanceof String)
                   obj.addProperty(entry.getKey(), (String) entry.getValue());
                 else if (entry.getValue() instanceof Number)
                   obj.addProperty(entry.getKey(), (Number) entry.getValue());
                 else if (entry.getValue() instanceof Boolean)
                   obj.addProperty(entry.getKey(), (Boolean) entry.getValue());
                 else if (entry.getValue() instanceof Character)
                   obj.addProperty(entry.getKey(), (Character) entry.getValue());
                 else if (entry.getValue() == null) {
                   obj.addProperty(entry.getKey(), (String) null);
                 } else {
                   obj.add(entry.getKey(), gson.toJsonTree(entry.getValue()).getAsJsonObject());
                 }
               }
             }
             elementAdapter.write(out, obj);
           }

           @Override
           public TradeExecutionStatus read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             // store additional fields in the deserialized instance
             TradeExecutionStatus instance = thisAdapter.fromJsonTree(jsonObj);
             for (Map.Entry<String, JsonElement> entry : jsonObj.entrySet()) {
               if (!openapiFields.contains(entry.getKey())) {
                 if (entry.getValue().isJsonPrimitive()) { // primitive type
                   if (entry.getValue().getAsJsonPrimitive().isString())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsString());
                   else if (entry.getValue().getAsJsonPrimitive().isNumber())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsNumber());
                   else if (entry.getValue().getAsJsonPrimitive().isBoolean())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsBoolean());
                   else
                     throw new IllegalArgumentException(String.format("The field `%s` has unknown primitive type. Value: %s", entry.getKey(), entry.getValue().toString()));
                 } else if (entry.getValue().isJsonArray()) {
                     instance.putAdditionalProperty(entry.getKey(), gson.fromJson(entry.getValue(), List.class));
                 } else { // JSON object
                     instance.putAdditionalProperty(entry.getKey(), gson.fromJson(entry.getValue(), HashMap.class));
                 }
               }
             }
             return instance;
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of TradeExecutionStatus given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of TradeExecutionStatus
  * @throws IOException if the JSON string is invalid with respect to TradeExecutionStatus
  */
  public static TradeExecutionStatus fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, TradeExecutionStatus.class);
  }

 /**
  * Convert an instance of TradeExecutionStatus to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

